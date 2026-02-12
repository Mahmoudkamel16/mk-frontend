"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>لوحة التحكم</h1>

      {projects.length === 0 ? (
        <p>جاري تحميل البيانات...</p>
      ) : (
        projects.map((project, index) => (
          <div key={index} style={{ marginTop: 20 }}>
            <h2>{project.name}</h2>
            <p>نسبة الإنجاز: {project.progress}%</p>
          </div>
        ))
      )}
    </main>
  );
}
