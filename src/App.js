export default function App() {
  let list = [1, 2, 3, 4, 5,3];
  return (
    <div className="container-fluid">
      <div className="row bg-dark p-3 text-light sticky-top">
        <div className="col">React</div>
      </div>

      {list.map(() => (
        <div className="row">
          <div className="col bg-secondary text-light mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quod animi, aperiam assumenda dicta nihil quisquam aliquid corrupti
            ab reprehenderit voluptatem recusandae quia optio! Vitae quaerat
            mollitia est accusantium cupiditate laborum, blanditiis facilis
            earum delectus, pariatur dicta? Omnis, nesciunt ullam.
          </div>
        </div>
      ))}
    </div>
  );
}
