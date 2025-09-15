import { TimeCard } from '@/components/time-card'
import React from 'react'

import { statitics } from './data'
import { Shell } from '@/components/shell'

export default function Page() {
  return (
    <Shell className="max-w-7xl mx-auto px-4">
      <header className=" w-full text-2xl block font-bold text-zinc-100 mb-5 text-center">
        Estatisticas da Partida
      </header>
      {statitics.map((item, index) => (
        <>
          <div key={index} className="w-full flex max-w-7xl mx-auto flex-col">
            <div className=" flex flex-row">
              <div className="w-full">
                <TimeCard
                  goals={item.time1.goals}
                  image={item.time1.shield}
                  name={item.time1.name}
                />
              </div>
              <div className="w-full">
                <TimeCard
                  image={item.time2.shield}
                  name={item.time2.name}
                  goals={item.time2.goals}
                />
              </div>
            </div>

            <ul className="w-full space-y-4 mt-4">
              <li className="flex items-center justify-between border-b border-zinc-700 px-4 py-4">
                <div className="">
                  <span>{item.time1.goals}</span>
                </div>
                <div className="">
                  <strong>Total de Gols</strong>
                </div>
                <div className="">{item.time2.goals}</div>
              </li>

              <li className="flex items-center text-center gap-4 justify-between w-full border-b border-zinc-700 px-4 py-4">
                <div className="flex flex-wrap max-w-[120px] w-full">
                  {item.time1.playerGoals.map((item, index) => (
                    <div className="" key={index}>
                      <span className="block items-center justify-start text-sm ">
                        {item.name}({item.number}){' - '}
                        {item.goals}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-1 items-center justify-center">
                  <strong>Gols</strong>
                </div>
                <div className="">
                  {item.time2.playerGoals.map((item, index) => (
                    <div className="flex" key={index}>
                      <span>
                        {item.name}({item.number}){'-'}
                        {item.goals}
                      </span>
                    </div>
                  ))}
                </div>
              </li>

              <li className="flex items-center justify-between border-b border-zinc-700 px-4 py-4">
                <div className="">
                  <span>{item.time1.faltas}</span>
                </div>
                <div className="">
                  <strong>Faltas</strong>
                </div>
                <div className="">{item.time2.faltas}</div>
              </li>

              <li className="flex items-center justify-between border-b border-zinc-700 px-4 py-4">
                <div className="">
                  <span>{item.time1.cartoes}</span>
                </div>
                <div className="">
                  <strong>Total de cartoes</strong>
                </div>
                <div className="">{item.time2.cartoes}</div>
              </li>
              <li className="flex items-center justify-between border-b border-zinc-700 px-4 py-4">
                <div className="">
                  <span>{item.time1.ca}</span>
                </div>
                <div className="">
                  <strong>Cartoes Amarelo</strong>
                </div>
                <div className="">{item.time2.ca}</div>
              </li>

              <li className="flex items-center justify-between border-b border-zinc-700 px-4 py-4">
                <div className="">
                  <span>{item.time1.cv}</span>
                </div>
                <div className="">
                  <strong>Cartoes Vermelho</strong>
                </div>
                <div className="">{item.time2.cv}</div>
              </li>

              <li className="flex items-center justify-between border-b border-zinc-700 px-4 py-4">
                <div className="">
                  <span>{item.time1.expulsoes}</span>
                </div>
                <div className="">
                  <strong>Expulso</strong>
                </div>
                <div className="">{item.time2.expulsoes}</div>
              </li>
            </ul>
          </div>
        </>
      ))}
    </Shell>
  )
}
