export default function CropImg({ name, size = 28 }) {
  return (
    <img
      src={`/images/crops/${name.replaceAll(' ', '')}.${
        name === 'Spectre Flower' ? 'png' : 'webp'
      }`}
      alt={name}
      title={name}
      style={{ width: size, height: size }}
    />
  );
}
