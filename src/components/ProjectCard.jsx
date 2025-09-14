export default function ProjectCard({ title, image, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-6 w-60">
      <img src={image} alt={title} className="w-28 h-28 object-cover rounded mb-3"/>
      <h3 className="font-bold text-pink-500">{title}</h3>
      <p className="text-gray-700 text-center mt-2">{description}</p>
    </div>
  );
}
