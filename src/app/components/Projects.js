import Image from 'next/image';

export default function Projects() {
    return (
      <section id="projects" className="p-8">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="space-y-6">
          <div className="pl-4 space-y-2">
            <h3 className="text-2xl font-bold"><a href="https://github.com/theboomiest/pf2e_ref/tree/master/reference-page">PF2e Command Screen</a></h3>
            <p className="pl-4 w-3/5 text-xl text-slate-600">Pathfinder 2nd Edition Digital Game Master Screen</p>
            <p className="w-3/5 text-lg text-slate-900">A webapp Game Master screen for the second edition of the table top role playing game Pathfinder. As a traditional pen and paper style TTRPG, Pathfinder 2e has an enormous catalogue of rules that must either be memorized or readily available to play the game. This quick reference is an attempt by me to streamline the rules lookup process to allow a Game Master to run the table as smoothly as possible without the need for encyclopedic game knowledge or breaks in the action while they look up rules. </p>
          </div>
          <div className="pl-4 space-y-2">
            <div className="flex items-start space-x-2">
              <a href='https://umbrage.world' target='_blank'><Image src="/burning-skull-icon.png" alt="Burning skull icon for umbrage.world" width={32} height={32}/></a>
              <h3 className="text-2xl font-bold"><a href="https://umbrage.world" target='_blank'>umbrage.world</a></h3>
            </div>
            <p className="pl-4 w-3/5 text-xl text-slate-600">Campaign website for Pathfinder 2e with custom wiki-style setting documentation</p>
            <p className="w-3/5 text-lg text-slate-900">A Wordpress website for a custom PF2e campaign. Featuring a robust wiki that contains all the custom setting information compiled using Quartz interpreting a directory of Markdown files. The setting page is hosted on a static GitPage.</p>
          </div>
          {/*<div className="pl-4 space-y-1">
            <div className="flex items-start space-x-2">
              <a href='https://umbrage.world' target='_blank'><Image src="/burning-skull-icon.png" alt="Burning skull icon for umbrage.world" width={32} height={32}/></a>
              <h3 className="text-2xl font-bold"><a href="https://umbrage.world" target='_blank'>umbrage.world</a></h3>
            </div>
            <p className="pl-4 max-w-xl text-xl text-slate-600">Campaign website for Pathfinder 2e with custom wiki-style setting documentation</p>
            <p className="max-w-xl text-lg text-slate-900">A Wordpress website for a custom PF2e campaign. Featuring a robust wiki that contains all the custom setting information compiled using Quartz interpreting a directory of Markdown files. The setting page is hosted on a static GitPage.</p>
          </div>*/}
          {/* Add more projects as needed */}
        </div>
      </section>
    )
  }
  