import fs from "fs";
import path from "path";
import sharp from "sharp";
import { execFile } from "child_process";
import { promisify } from "util";
import ffmpegPath from "ffmpeg-static";

const execFileAsync = promisify(execFile);

const inputDir = path.resolve("./public/projects");
const outputDir = path.resolve("./public-optimized");

const imageExtensions = [".jpg", ".jpeg", ".png"];
const videoExtensions = [".mp4", ".mov", ".mkv", ".avi", ".webm"];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Optimización de imágenes
 */
async function optimizeImage(filePath) {
  const relativePath = path.relative(inputDir, filePath);
  const parsed = path.parse(relativePath);

  const outputFolder = path.join(outputDir, parsed.dir);
  ensureDir(outputFolder);

  const webpPath = path.join(outputFolder, `${parsed.name}.webp`);

  await sharp(filePath)
    .resize({
      width: 1400,
      withoutEnlargement: true,
    })
    .webp({
      quality: 78,
    })
    .toFile(webpPath);

  
}

/**
 * Optimización de videos
 */
async function optimizeVideo(filePath) {
  const relativePath = path.relative(inputDir, filePath);
  const parsed = path.parse(relativePath);

  const outputFolder = path.join(outputDir, parsed.dir);
  ensureDir(outputFolder);

  const webmPath = path.join(outputFolder, `${parsed.name}.webm`);

  console.log(`🎬 Procesando video: ${relativePath}`);

  await execFileAsync(ffmpegPath, [
    "-i",
    filePath,

    // Escala máxima 1280x720 manteniendo proporción
    "-vf",
    "scale=w=1280:h=720:force_original_aspect_ratio=decrease",

    // Video WebM VP9
    "-c:v",
    "libvpx-vp9",

    // Calidad
    "-crf",
    "32",

    // Velocidad de codificación
    "-b:v",
    "0",

    // Sin audio
    "-an",

    // Pixel format compatible
    "-pix_fmt",
    "yuv420p",

    // Evita sobreescrituras accidentales
    "-y",

    webmPath,
  ]);

  
}

/**
 * Recorre recursivamente public/
 */
async function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);

    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await walk(filePath);
      continue;
    }

    const ext = path.extname(filePath).toLowerCase();

    if (imageExtensions.includes(ext)) {
      await optimizeImage(filePath);
      continue;
    }

    if (videoExtensions.includes(ext)) {
      await optimizeVideo(filePath);
    }
  }
}

/**
 * Inicio
 */
async function main() {
  console.log(" Iniciando optimización...\n");

  ensureDir(outputDir);

  await walk(inputDir);

  console.log("\n Optimización completada correctamente.");
}

main().catch((error) => {
  console.error("\n Error durante la optimización:");
  console.error(error);
  process.exit(1);
});