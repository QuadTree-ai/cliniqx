"use client";

import { useState } from "react";
import HealthIssues from "./anatomyicon/markhealthissues";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Model from "./Model";


export default function HumanModel() {
  const [isFrontView, setIsFrontView] = useState(true);

  return (
    <div>
      <Model />
    </div>
  );
}
