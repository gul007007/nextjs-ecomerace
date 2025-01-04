import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="h-screen">
      <ul className="h-12 flex justify-end items-center gap-3 text-lg lg:text-xl pr-3">
        <li>
          <Link href="/authentication_pages/signup">Signup</Link>
        </li>
        <li>
          <Link href="/authentication_pages/login">Login</Link>
        </li>
      </ul>

      <div className="h-[90%] flex justify-center items-center">
        <h1 className="text-center text-5xl lg:text-7xl">MY E-COMERACE</h1>
        <Button>Button</Button>
      </div>
    </div>
  );
};

export default Home;

// Re-vision
/*
1.  collect all functional requirements.
2. Make a list of features from functional requirements.
3. Draw user jounrney and edge cases.
4. during user journey attach features to pages and wireframe UI.

(authentication,product catalog,shopping cart,order management,payment gateway integration(Just cash on delivery for now).
Is there any must-have feature missing?
Is there any feature extra in start ?
Plan User Journeys and edge cases.
map each feature with page.
phases in which project will be divided.
design pages.)
*/
