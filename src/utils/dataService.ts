// src/utils/dataService.ts

import { ObjectId } from 'mongodb';
import { getDb } from '../lib/mongodb';

export async function getMedicalReportData(reportId: string): Promise<string> {
    if (!ObjectId.isValid(reportId)) {
        throw new Error(`Invalid reportId: '${reportId}' is not a valid ObjectId.`);
    }

    const db = await getDb();
    const report = await db.collection('reports').findOne({ _id: new ObjectId(reportId) });

    if (!report) {
        throw new Error(`No report found with ID: ${reportId}`);
    }

    if (!report.insights) {
        throw new Error('Requested report lacks necessary insights data.');
    }

    return report.insights;
}
