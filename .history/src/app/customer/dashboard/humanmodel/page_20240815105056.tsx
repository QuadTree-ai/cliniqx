"use client";

import { useState } from "react";
import HealthIssues from "./markhealthissues";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Model from "./HumanModel";


export default function HumanModel() {
  const [isFrontView, setIsFrontView] = useState(true);

  return (
    <div>
      <Model />
      <HealthIssues />
    </div>
  );
}
