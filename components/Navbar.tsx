import Link from "next/link"

const Navbar = () => {
  return (
    <div>
        <Link href={"/habitaciones"}>Habitaciones</Link>
        <Link href={"/eventos"}>Eventos</Link>
    </div>
  )
}

export default Navbar