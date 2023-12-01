import Card from "./components/Card";
import Background from "./components/bg/Background";

export default function Home() {
  return (
    <div className="relative">
      <Background className="absolute z-0 w-full h-full overflow-hidden"/>
      <Card className="relative z-10"/>
    </div>
  )
}
