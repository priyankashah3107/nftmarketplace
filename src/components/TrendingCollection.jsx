import React from 'react'

const title = "Trending Collection";
const para = "Checkout our weekly updated trending collection."

const collections = [
  {
    id: 1,
    image: "/collections/dog.png",
    subone: "/collections/ani.png",
    subtwo: "/collections/animal.png",
    subthree: "1025+",
    title: "DSGN Animals",
    icon: "/collections/a.png",
    name: "MrFox"
  },
  {
    id: 2,
    image: "/collections/mashroom.png.png",
    subone: "/collections/mash.png",
    subtwo: "/collections/mashro.png",
    subthree: "1025+",
    title: "Magic Mushrooms",
    icon: "/collections/m.png",
    name: "Shroomie"
  },
  {
    id: 3,
    image: "/collections/robot.png",
    subone: "/collections/ro.png",
    subtwo: "/collections/robo.png",
    subthree: "1025+",
    title: "Disco Machines",
    icon: "/collections/r.png",
    name: "BeKind2Robots"
  },
]
export default function TrendingCollection() {
  return (
    <div>TrendingCollection</div>
  )
}
