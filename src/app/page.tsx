import Card from "./components/Card";
import Background from "./components/bg/Background";

export default function Home() {
  return (
    <div className="relative h-full">
      <Card className="z-10"/>
      <Background/>
    </div>
  )
}
