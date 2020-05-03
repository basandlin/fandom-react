import React, { useState } from "react";
import { SectionTitle, TalentPath } from "../../index";
import { TALENT_PATH_1, TALENT_PATH_2 } from "../../../utils/constants";

import "./Home.scss";

export default function TalentCalculator() {
  const [spent, setSpent] = useState(0);
  const width = 965;
  return (
    <div className="talent-calculator">
      <SectionTitle
        width={width}
        title="TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000"
      />
      <div className="body">
        <div className="body__paths">
          <TalentPath
            title="TALENT PATH 1"
            path={TALENT_PATH_1}
            setSpent={setSpent}
            spent={spent}
          />
          <TalentPath
            title="TALENT PATH 2"
            path={TALENT_PATH_2}
            setSpent={setSpent}
            spent={spent}
          />
        </div>
        <div className="body__points">
          <div className="body__points--numbers">{spent}/6</div>
          <div className="body__points--label">Points Spent</div>
        </div>
      </div>
    </div>
  );
}
