import React from "react";
import BaseLayout from "../BaseLayout";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Quiz() {
  return (
    <BaseLayout>
      <div className="ml-[245px] mt-[40px]">
        <Link href="/dashboard/Quiz/Questions">
          <Button> Start Quiz</Button>
        </Link>
      </div>
    </BaseLayout>
  );
}

export default Quiz;
