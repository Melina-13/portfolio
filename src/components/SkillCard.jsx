export default function SkillCard({ title, level, percent, category }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-60">
      <div className="flex gap-2 mb-2">
        <span className="font-bold">{title}</span>
        <span className="text-green-500">{category}</span>
      </div>
      <p className="text-gray-700 mb-2">{level}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div className="bg-pink-300 h-2 rounded-full" style={{ width: `${percent}%` }}></div>
      </div>
      <span className="text-sm text-pink-500">{percent}%</span>
    </div>
  );
}
