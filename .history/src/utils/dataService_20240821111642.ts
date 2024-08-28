// src/utils/dataService.ts

import { ObjectId } from 'mongodb';
import { getDb } from '../lib/mongodb'; // Adjust path as needed

// Function to retrieve medical report data from the database
export async function getMedicalReportData(reportId: string): Promise<string> {
  const db = await getDb();
  const report = await db.collection('reports').findOne({ _id: new ObjectId(reportId) });

  if (!report) {
    throw new Error(`No report found with ID: ${reportId}`);
  }

  if (!report.insights) {
    throw new Error('Report has no insights data.');
  }

  return report.insights;
}
