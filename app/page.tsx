"use client"
// import { useEffect, useState } from "react";
import { Anouncement } from "@/components/Announcement";

export default function Home() {

  // const [message, setMessage] = useState<string>("");

  // useEffect(() => {
  //   const body = fetch("/api/test").then(res => res.json()).then(json => );
  // }, [])


  return (
    <div >
      <Anouncement />
    </div>
  );
}
