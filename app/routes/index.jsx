
export let meta = () => {
  return {
    title: "My Posts"
  };
};

export default function Index() {
  return (
    <div>
      <form action="/sun-status" method="GET">
        Post Id: <input  name="ipAddress" />
        <input type="submit" value="Get sun status" />
      </form>
    </div>
  );
}