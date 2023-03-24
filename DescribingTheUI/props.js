function Avatar({ person, size }) {
  return (
    <img
      classname="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      person={{ name: "Philasande Ngcamu", imageId: "1bX5QH6" }}
      size={100}
    />
  );
}
