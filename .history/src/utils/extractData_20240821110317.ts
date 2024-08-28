import { ObjectId } from 'mongodb';
import { getDb } from '../lib/mongodb'; // Adjust path as needed

export async function getMedicalReportData(reportId: string): Promise<string | undefined> {
  try {
    const db = await getDb();
    
    // Convert the string reportId to an ObjectId
    const objectId = new ObjectId(reportId);
    
    // Query the database using the ObjectId
    const report = await db.collection('reports').findOne({ _id: objectId });

    if (!report || !report.insights) {
      return undefined;
    }

    return report.insights;
  } catch (error) {
    console.error('Error retrieving medical report data:', error);
    return undefined;
  }
}
