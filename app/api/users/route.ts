// app/api/users/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'db.json');

interface Data {
  value: number;
  lastUpdated: string;
}

const INITIAL_NUMBER = 4000;

export async function GET() {
  try {
    // Read current data
    let data: Data;
    try {
      const fileContent = await fs.readFile(DATA_FILE_PATH, 'utf-8');
      data = JSON.parse(fileContent);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (readError: any) {
      if (readError.code === 'ENOENT') {
        // File not found, initialize data
        data = { value: INITIAL_NUMBER, lastUpdated: new Date().toISOString() };
        await fs.writeFile(DATA_FILE_PATH, JSON.stringify(data, null, 2));
      } else {
        throw readError;
      }
    }

    const lastUpdateDate = new Date(data.lastUpdated);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastUpdateDay = new Date(lastUpdateDate);
    lastUpdateDay.setHours(0, 0, 0, 0);

    const isNewDay = lastUpdateDay.toDateString() !== today.toDateString();

    if (isNewDay) {
      // Calculate random increment between 50 and 100 (in tens)
      const minIncrement = 5;
      const maxIncrement = 10;
      const randomTens = Math.floor(Math.random() * (maxIncrement - minIncrement + 1)) + minIncrement;
      const increment = randomTens * 10;

      const newNumber = data.value + increment;

      // Update data and write back to file
      data.value = newNumber;
      data.lastUpdated = today.toISOString(); // Store current date

      await fs.writeFile(DATA_FILE_PATH, JSON.stringify(data, null, 2));
      console.log('Number updated:', newNumber); 
    }

    return NextResponse.json({ number: data.value || 4260 });

  } catch (error) {
    console.error('Error getting/updating number:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}