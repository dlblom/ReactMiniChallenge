// Before jumping into coding, check out the README!

// TODO: Create an App component which renders FactsList
export default function App() {
  return (
    <div className='main'>
      <h1 className='heading'>Welcome to Animal Facts!</h1>
      {/* TODO: when the favorite button is clicked in a Fact component, the App state should update with the name of the animal that was favorited and be rendered in the h2 with className 'fave' */}
      <h2 className='fave'>My Favorite Animal: {}</h2>
      <FactsList />
    </div>
  );
}
