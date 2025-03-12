import { NextResponse } from "next/server";

import { ReportStatus, ReportType } from "@prisma/client";
import prisma from "../../../../../lib/prisma";

export async function POST(request: Request) {
    try {
        const {
            reportId,
            type,
            specificType,
            title,
            description,
            location,
            latitude,
            longtitude,
            image,
            status,
        } = await request.json();

        const report = await prisma.report.create({
            data: {
                reportId,
                type: type as ReportType,
                reportType: specificType,
                title,
                description,
                location,
                latitude: latitude || null,
                longtitude: longtitude || null,
                image: image || null,
                status: status || "PENDING",
            }
        });

        return NextResponse.json({
            success: true, 
            reportId: report.reportId,
            message: "Report submission is successful!",
        })
    } catch (error) {
        console.log("Cannot create report: ", error);
        return NextResponse.json(
            {
                sucess: false,
                error: "Failed to submit report"

            },
            {
                status: 500,
            }
        )
    }
    
}