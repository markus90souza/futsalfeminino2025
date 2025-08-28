import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { classificacao } from "./classificacao";

const ClassifacaoPage = () => {
  return (
    <div className="flex flex-col pb-16 px-4 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <div className="flex flex-col gap-3">
          <strong className="text-2xl mt-4 font-semibold uppercase">
            Ranking
          </strong>
          <ScrollArea className="">
            <Table>
              <TableHeader>
                <TableHead className="w-10">PTS</TableHead>
                <TableHead className="">Time</TableHead>
                <TableHead className="w-10">J</TableHead>
                <TableHead className="w-10">V</TableHead>
                <TableHead className="w-10">E</TableHead>
                <TableHead className="w-10">D</TableHead>
                <TableHead className="w-10">GF</TableHead>
                <TableHead className="w-10">GC</TableHead>
                <TableHead className="w-10">GS</TableHead>
              </TableHeader>
              <TableBody>
                {classificacao
                  .sort((a, b) => b.pts - a.pts)
                  .map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-mono text-sm text-center font-medium">
                        {item.pts}
                      </TableCell>

                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-10">
                            <Image
                              src={item.image}
                              alt=""
                              width={100}
                              height={100}
                            />
                          </div>
                          <span className="text-xs uppercase">{item.name}</span>
                        </div>
                      </TableCell>

                      <TableCell className="font-medium w-10 text-center">
                        {item.j}
                      </TableCell>
                      <TableCell className="font-medium w-10 text-center">
                        {item.v}
                      </TableCell>

                      <TableCell className="font-medium w-10 text-center">
                        {item.e}
                      </TableCell>
                      <TableCell className="font-medium text-center">
                        {item.d}
                      </TableCell>
                      <TableCell className="font-medium text-center">
                        {item.gf}
                      </TableCell>
                      <TableCell className="font-medium text-center">
                        {item.gc}
                      </TableCell>

                      <TableCell className="font-medium text-center">
                        {item.gs}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default ClassifacaoPage;
