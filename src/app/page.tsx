import Card from "./components/Card";
import Background from "./components/bg/Background";

export default function Home() {
  return (
    <div className="relative bg-primary">
      <Background className="absolute z-0 w-full h-full overflow-hidden"/>
      <Card className="relative z-10 border-primary/20 border-x-8"/>
    </div>
  )
}
