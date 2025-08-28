import { EquipeCard } from '@/components/cards/equipe-card'
import { Section } from '@/components/shared/section'
// import { Section } from '@/components/shared/section'
import { Shell } from '@/components/shell'
import { times } from '@/data/times'
// import { TimeCard } from '@/components/time-card'

// const groups = [
//   {
//     group: [
//       {
//         name: 'GRUPO A',
//         times: [
//           {
//             name: 'GALÁCTICOS',
//             shield: '/times/real-madruga.png',
//           },
//           {
//             name: 'PSG PITUBA',
//             shield: '/images/psg-pituba.png',
//           },
//           {
//             name: 'DOCES SOUZA',
//             shield: '/images/doces-souza.png',
//           },
//           {
//             name: 'MORRO DA PROVIDÊNCIA',
//             shield: '/images/morro-da-providencia.png',
//           },
//         ],
//       },

//       {
//         name: 'GRUPO B',
//         times: [
//           {
//             name: 'MILAN',
//             shield: '/images/galacticos.png',
//           },
//           {
//             name: 'AMÉRICA',
//             shield: '/images/psg-pituba.png',
//           },
//           {
//             name: 'JUVENTOS',
//             shield: '/images/doces-souza.png',
//           },
//           {
//             name: 'DONOS DA RUA',
//             shield: '/images/morro-da-providencia.png',
//           },
//         ],
//       },
//     ],
//   },
// ]

const TimesPage = () => {
  return (
    // <section className="w-full h-screen flex">
    //   <div className=""></div>
    //   <div className="">
    //     {groups.map((group, index) => {
    //       return (
    //         <Shell key={group.group[index].name}>
    //           <Section
    //             title="Times"
    //             href="/"
    //             className="pt-8 md:pt-10 lg:pt-12"
    //           >
    //             {group.group[index].times.map((time) => (
    //               <EquipeCard
    //                 key={time.name}
    //                 time={{ image: time.shield, name: time.name }}
    //               />
    //             ))}
    //           </Section>
    //         </Shell>
    //       )
    //     })}
    //   </div>
    // </section>
    <div className="">
      <Shell className="max-w-7xl mx-auto">
        <Section
          title="TiMES"
          description="TODOS OS TIMES QUE VÃO JOGAR NA 1 COPA CONSAGRADOS"
          href="#"
          className="pt-8 md:pt-10 lg:pt-12"
        >
          {times.map((time) => (
            <EquipeCard
              key={time.name}
              time={{ image: time.shield, name: time.name }}
            />
          ))}
        </Section>
      </Shell>
    </div>
  )
}

export default TimesPage
