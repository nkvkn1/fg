import { promises as fs } from "fs";
import path from "path";

const STORAGE_DIR = path.join(process.cwd(), "data");
const CONTACT_FILE = path.join(STORAGE_DIR, "contact-inquiries.json");
const POPUP_FILE = path.join(STORAGE_DIR, "popup-leads.json");

async function ensureStorage() {
  await fs.mkdir(STORAGE_DIR, { recursive: true });
}

async function readEntries(filePath) {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function writeEntries(filePath, nextEntries) {
  await ensureStorage();
  await fs.writeFile(filePath, JSON.stringify(nextEntries, null, 2));
}

export async function saveContactInquiry(entry) {
  const existing = await readEntries(CONTACT_FILE);
  existing.push({
    ...entry,
    createdAt: new Date().toISOString(),
  });
  await writeEntries(CONTACT_FILE, existing);
}

export async function savePopupLead(entry) {
  const existing = await readEntries(POPUP_FILE);
  existing.push({
    ...entry,
    createdAt: new Date().toISOString(),
  });
  await writeEntries(POPUP_FILE, existing);
}
