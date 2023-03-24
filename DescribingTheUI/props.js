function Avatar({ ...props }) {
  return (
    <img
      classname="avatar"
      src={getImageUrl(props.person)}
      alt={props.person.name}
      width={props.size}
      height={props.size}
    />
  );
}

function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

function Card({ children }) {
  return <div>{children}</div>;
}

export default function Profile() {
  return (
    <>
      <Card>
        <Avatar
          person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
          size={100}
        />
      </Card>
    </>
  );
}
