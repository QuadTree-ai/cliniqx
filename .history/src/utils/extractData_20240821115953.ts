import { ObjectId } from 'mongodb';
import { getDb } from '../lib/mongodb'; // Adjust path as needed

/**
 * Function to retrieve medical report data from the database.
 * Throws an error if the reportId is not a valid ObjectId or if no data is found.
 * 
 * @param {string} reportId - The ID of the report to retrieve.
 * @returns {Promise<string>} - The insights data from the report.
 * @throws {Error} - If no report is found or if the reportId is not valid.
 */
export async function getMedicalReportData(reportId: string): Promise<string> {
  // Validate reportId as a valid ObjectId
  if (!ObjectId.isValid(reportId)) {
    throw new Error(`Invalid reportId: '${reportId}' is not a valid ObjectId.`);
  }

  const db = await getDb();
  const report = await db.collection('reports').findOne({ _id: new ObjectId(reportId) });

  // Handle cases where no report is found
  if (!report) {
    throw new Error(`No report found with ID: ${reportId}`);
  }

  // Ensure the report contains the necessary 'insights' data
  if (!report.insights) {
    throw new Error('Report has no insights data.');
  }

  return report.insights;
}
