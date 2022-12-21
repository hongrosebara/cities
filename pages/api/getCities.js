import fs from "fs";
import path from "path";

export function buildCityPath() {
  return path.join(process.cwd(), 'data', 'cities.json')
}

export function extractData(filepath) {
  const fileData = fs.readFileSync(filepath);
  const data = JSON.parse(fileData);
  return data
}

