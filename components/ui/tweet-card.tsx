"use client";

import { Tweet } from "react-tweet";

interface TweetCardProps {
  id: string;
}

export function TweetCard({ id }: TweetCardProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <Tweet id={id} />
    </div>
  );
}

