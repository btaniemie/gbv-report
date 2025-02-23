"use client"
import { useState, useCallback } from "react";

const REPORT_TYPES = [
    "Physical Violence",
    "Sexual Violence",
    "Emotional/Psychological Abuse",
    "Economic Abuse",
    "Digital Abuse",
    "Discriminatory Violence",
] as const;

type ReportType = "EMERGENCY" | "NON_EMERGENCY";

interface ReportFormProps {
    onComplete: (data: any) => void;
}

export function ReportForm({onComplete}: ReportFormProps) {
    const [formData, setFormData] = useState({
        incidentType: "" as ReportType,
        specificType: "",
        location: "",
        description: "",
        title: "",
    });
    const [image, setImage] = useState<string | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [coordinates, setCoordinates] = useState<{
        latitude: number | null;
        longitude: number | null;
    }>({
        latitude: null,
        longitude: null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <form></form>
    )

}

  