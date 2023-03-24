function Avatar() {
  return (
    <img
      classname="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Philasande Happy Ngcamu"
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
