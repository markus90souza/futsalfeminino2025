"use client";

import { GameCard } from "@/components/cards/game-card";

import { Section } from "@/components/shared/section";
import { Shell } from "@/components/shell";
// import { TimeCardFull } from '@/components/time-card-full'
import { primeiraRodada, segundaRodada, terceiraRodada } from "@/data/jogos";

import Image from "next/image";
import { Partner } from "./_components/partner";

export default function Home() {
  return (
    <div className="flex w-full h-screen py-14 flex-col ">
      <div className="w-full  flex items-center  justify-center max-w-7xl mx-auto ">
        <Image
          alt="image"
          width={169}
          height={105}
          className="object-contain"
          src={"/images/asset-0.webp"}
        />
      </div>

      <div className="w-full">
        <Shell className="max-w-7xl mx-auto px-4">
          <Section title="Jogos da primeira rodada" href="#">
            {primeiraRodada.map((item, index) => (
              <GameCard
                key={index}
                time1={{
                  name: item.time1.name,
                  shield: item.time1.shield,
                  goal: item.time1.goals ? item.time1.goals : "0",
                }}
                time2={{
                  name: item.time2.name,
                  shield: item.time2.shield,
                  goal: item.time2.goals ? item.time2.goals : "0",
                }}
                round={item.rodada}
                date={item.date}
                hour={item.time}
                stadium={item.stadium}
                status={item.status as "Finalizado" | "Em andamento"}
                link={item.link}
              />
            ))}
          </Section>
        </Shell>
      </div>

      <div className="w-full">
        <Shell className="max-w-7xl mx-auto px-4">
          <Section title="Jogos da segunda rodada" href="#">
            {segundaRodada.map((item, index) => (
              <GameCard
                key={index}
                time1={{
                  name: item.time1.name,
                  shield: item.time1.shield,
                  goal: item.time1.goals ? item.time1.goals : "0",
                }}
                time2={{
                  name: item.time2.name,
                  shield: item.time2.shield,
                  goal: item.time2.goals ? item.time2.goals : "0",
                }}
                round={item.rodada}
                date={item.date}
                hour={item.time}
                stadium={item.stadium}
                status={item.status as "Finalizado" | "Em andamento"}
                link={item.link}
              />
            ))}
          </Section>
        </Shell>
      </div>

      <div className="w-full">
        <Shell className="max-w-7xl mx-auto px-4">
          <Section title="Jogos da terceira rodada" href="#">
            {terceiraRodada.map((item, index) => (
              <GameCard
                key={index}
                time1={{
                  name: item.time1.name,
                  shield: item.time1.shield,
                  goal: item.time1.goals ? item.time1.goals : "0",
                }}
                time2={{
                  name: item.time2.name,
                  shield: item.time2.shield,
                  goal: item.time2.goals ? item.time2.goals : "0",
                }}
                round={item.rodada}
                date={item.date}
                hour={item.time}
                stadium={item.stadium}
                status={item.status as "Finalizado" | "Em andamento"}
                link={item.link}
              />
            ))}
          </Section>
        </Shell>
      </div>

      <div className="w-full">
        <Shell className="max-w-7xl mx-auto px-4">
          <Section
            title="Nossos Parceiros"
            href="/"
            className="pt-8 justify-center"
            description="Nossos Parceiros, que nos ajudam a tornar a Copa Consagrada um sucesso."
          >
            <Partner />
          </Section>
        </Shell>
      </div>
    </div>
  );
}
