"use client";
import React from "react";
import NavBar from "@/ui/NavBar";
import Image from "next/image";

export default function Home() {
  const [showInfo, setShowInfo] = React.useState(true);
  const [showItems, setShowItems] = React.useState(false);
  const [delayedShowPage, setDelayedShowPage] = React.useState(false);
  const [fadeIn, setFadeIn] = React.useState(false);

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
  
    if (!showInfo) {
      timeout = setTimeout(() => {
        setDelayedShowPage(true);
        setTimeout(() => {
          setFadeIn(true);
        }, 200); // short delay to trigger transition
      }, 500); // wait 300ms
    } else {
      setFadeIn(false);
      setDelayedShowPage(false);
    }
  
    return () => clearTimeout(timeout);
  }, [showInfo]);


  const handleMouseEnter = () => {
    // wait 500ms before showing items
    setShowItems(true);
  }

  const handleMouseLeave = () => {
    setShowItems(false);
  }
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className={`${showInfo ? "h-svh" : "h-0"} + duration-1000 ease-in-out`}>
        <div className={`h-full flex flex-col justify-around overflow-hidden text-center ${showInfo ? "opacity-100": "opacity-0"} duration-500 ease-in-out`}>
          <div className="text-2xl font-bold">
            Apple Clone With Next.js
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="text-4xl font-bold cursor-pointer animate-(--zoom-in-out) hover:text-blue-900" onClick={(prev) => setShowInfo(!prev)}>
              Welcome to the Apple Clone
            </h1>
            <p className="text-lg text-gray-600">
              This is a simple clone of Apple's website using Next.js.
            </p>
          </div>
          <div className="text-sm text-gray-500">
            © 2025 Truc Minh Nguyen. All rights reserved.
          </div>
        </div>
      </div>
      {delayedShowPage && 
      <div className={`h-lvh flex flex-col items-center transition-opacity duration-500 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
        <div className={`relative w-full sticky top-0 flex justify-center z-50 ${showItems ? "bg-(--hover-bg-navbar) h-200" : "backdrop-blur-lg bg-white/50 delay-300"}`} onMouseLeave={handleMouseLeave}>
          <div className="container">
            <NavBar onMouseEnter={handleMouseEnter} showItems={showItems}/>
          </div>
        </div>
        <div className={`h-full flex flex-col items-center gap-12 duration-500 ${showItems && "blur-xs"}`}>
          <div className="bg-gray-100">
            <Image src="/hero_iphone_family__fuz5j2v5xx6y_mediumtall_2x.jpg" width={1920} height={200} alt=""></Image>
          </div>
          <div className="container ">
            This is the footer Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga, totam quam laudantium quidem deserunt accusamus eum saepe ea dolores sit nostrum mollitia reprehenderit id quisquam aliquid? Nostrum fugiat architecto consectetur nesciunt ullam ducimus magnam ratione natus molestias dolor. Possimus dolorum veniam, quae dolore numquam, deserunt accusantium obcaecati sapiente minus, nobis molestiae dicta at mollitia optio nihil quo. Perspiciatis ipsam sequi minus soluta, totam magni quod. Nemo temporibus autem sed, doloremque aut rem, nisi rerum voluptates corrupti corporis voluptas iure, excepturi recusandae aperiam sapiente repellat provident magnam adipisci? Facilis officia ea ipsa est non totam ducimus eveniet eaque quod perspiciatis at culpa veritatis ipsam repellat recusandae eligendi sint, nisi quia vero porro. Quasi ipsum sit laudantium eligendi explicabo consequuntur nulla sunt ex labore sequi impedit, officiis ab, perferendis magni eos, minus libero consequatur. Consequuntur, culpa voluptate iste molestiae porro fuga eum accusamus accusantium dolorum illo, quas, aliquam dolorem asperiores animi aut in natus. Ad facere ex debitis, harum nisi sapiente quas error nobis dolore obcaecati numquam dolorum vel fugit, blanditiis non nesciunt nostrum id magni nemo nihil suscipit atque doloremque amet? Ex assumenda, accusantium nostrum fuga excepturi saepe repellendus, eos asperiores, rerum deleniti veniam tempora nesciunt voluptatem quo quasi aspernatur? Ratione nulla quae iste, provident voluptates quo a. Ad mollitia nihil soluta rerum architecto odio recusandae veniam! Quibusdam ipsam cum adipisci assumenda nesciunt rerum minima sed quaerat ipsa aliquam eveniet dicta repudiandae non deserunt ad a, eum animi! Non, dolores amet porro libero voluptatem temporibus nesciunt dicta magnam, eum debitis soluta maiores sunt ea beatae recusandae, laudantium ipsa nam repudiandae vero? Corporis eaque eveniet, atque ab harum quisquam cumque voluptate unde id suscipit eius aliquid laboriosam consequuntur, accusamus non nihil a fuga? Doloribus ea iure itaque. Dolorem, quidem. Nesciunt natus ab consectetur, laudantium architecto placeat ipsam iste quis odio doloribus facilis officia provident debitis aliquam aliquid. Unde ratione facilis esse labore ducimus ea voluptas expedita porro corrupti quis provident inventore aperiam voluptatibus eveniet molestiae deserunt, architecto beatae eos exercitationem! Eos sint laboriosam nisi veniam officia consequatur iusto nemo eaque mollitia repellat similique ex architecto repudiandae perspiciatis nihil saepe maxime, cumque labore officiis obcaecati optio commodi doloribus. Illum molestias tempore quibusdam, quaerat, delectus ea placeat itaque beatae velit labore ut architecto expedita eligendi, soluta ipsam fugiat. Doloremque debitis sint, impedit qui, rem, totam repellendus fuga architecto iste nam animi ut! Itaque neque qui deleniti illum alias laborum ducimus! Error exercitationem consequuntur eaque rerum deserunt sapiente, consequatur harum! Doloribus vel fugiat distinctio labore quis maxime ratione ex earum neque, culpa cum vitae dolores laboriosam velit eveniet nesciunt ab delectus consequatur. Distinctio saepe, id et totam ipsa commodi magni alias animi architecto, voluptates dolorem reprehenderit vel minus expedita veniam molestias, vero ipsam? Sint reiciendis molestias accusamus fugiat. Et nostrum quae sint ipsa animi. Impedit sit adipisci unde ad possimus quasi similique in quibusdam facere, numquam quia qui voluptates veritatis omnis, perspiciatis ea consequatur repellat ducimus aut error! Ut provident numquam perspiciatis blanditiis cum necessitatibus culpa? Perspiciatis, facere cumque. Itaque atque odio porro natus enim, laudantium obcaecati dolorum expedita repudiandae delectus suscipit sunt, voluptas dignissimos qui accusamus placeat culpa eos adipisci quibusdam? Totam laborum iusto fugiat mollitia, rerum perspiciatis nam blanditiis cum voluptatibus ab vero in dicta, id qui cupiditate nemo saepe quos! Voluptatibus unde consequatur blanditiis ut suscipit maiores, earum nemo esse nesciunt illo vitae doloremque, illum quasi, iusto corrupti! Magni illum blanditiis impedit commodi repellendus ad ipsum soluta temporibus tempora dolorem deleniti praesentium provident harum, quisquam doloremque nulla! Eveniet, harum? Amet ex ipsam recusandae quas cum maiores quidem cupiditate repellendus accusamus iure magnam voluptatem quibusdam delectus corporis et molestias nam, adipisci dolor eos sunt incidunt! Explicabo blanditiis doloribus velit perferendis incidunt sapiente aut facere expedita ducimus voluptatem quod ut ea cupiditate fugit molestias, esse, sit sed fuga est autem. Totam commodi atque necessitatibus fugiat animi repellat quaerat nulla sapiente possimus, rem maxime dolore eius, non, optio consectetur iusto vitae illum error! Possimus, numquam ad necessitatibus natus aspernatur voluptate minus corrupti quasi sequi ipsa officiis veritatis ut accusamus quam libero enim similique, est magnam odit. Accusamus molestiae porro nemo explicabo nihil minus, corrupti inventore, reiciendis qui impedit recusandae aut voluptas illum consequuntur incidunt at. Atque dicta rem neque voluptatibus aut? Voluptate facere repudiandae perferendis quas ducimus, possimus, temporibus beatae iure amet doloribus ad accusamus dignissimos aliquam nam ipsam neque suscipit quod aliquid consectetur quibusdam ullam optio illo. Facilis iure modi sequi officia omnis, illum repellat distinctio ducimus officiis, nisi debitis. Sunt eius ad doloremque ipsum eligendi officia quisquam quia quos dolores inventore, distinctio, nesciunt adipisci harum, cumque ex enim hic! Expedita corrupti voluptates aut obcaecati! Cumque molestias laboriosam ab earum! Possimus veniam laboriosam deserunt ab eius unde nisi, exercitationem aperiam quae! Quos maxime reprehenderit ut labore. Iste, perspiciatis tenetur! Harum facere quia sunt reiciendis omnis provident sequi expedita laudantium, cum consequuntur officia fugit? Impedit, assumenda beatae fugit, ipsam veritatis at in quo qui fuga libero aperiam a voluptas? Quod, fuga non voluptates obcaecati quam dolorem! Officiis, voluptas? Amet earum et tenetur labore mollitia porro ullam atque at incidunt officia corporis accusamus officiis ipsa nam maiores repudiandae quasi in, corrupti nesciunt suscipit cumque recusandae ea. Atque minima molestiae iure quam quis odio similique mollitia aut quisquam pariatur laborum in eum sapiente assumenda voluptatibus neque aperiam voluptatum, consectetur consequatur necessitatibus autem! Facere nisi impedit illum eos nesciunt praesentium ad iste non ducimus dolore, libero ullam eius nostrum nulla quaerat veniam veritatis assumenda inventore nam. Voluptas officia, ut, quis voluptatem enim deserunt fugiat aperiam doloremque vitae possimus recusandae vel ratione. Ea quaerat in aperiam quibusdam ducimus quisquam autem optio, atque veritatis, quod odit! Beatae alias sint quisquam deserunt, rem enim minima vel, hic quaerat voluptas possimus. Velit quos harum dolore id aliquid deserunt qui molestiae voluptatum nobis expedita, quis praesentium aperiam eum voluptas reprehenderit quam. Repellendus dolorem ducimus hic quae placeat recusandae incidunt natus. Dolore voluptate nobis commodi modi, labore non error itaque accusantium a similique? Quasi, reiciendis magnam. Sunt, temporibus quo? Inventore, atque officiis similique nam ut nemo architecto nesciunt quam autem saepe omnis vero!
          </div>
        </div>
      </div>
      }
    </div>
  );
}
