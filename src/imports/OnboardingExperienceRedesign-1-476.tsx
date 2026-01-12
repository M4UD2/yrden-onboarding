function Icon() {
  return (
    <div className="h-[27px] relative shrink-0 w-[32.953px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[27px] items-start relative w-[32.953px]">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-neutral-950">🧩</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute box-border content-stretch flex h-[61px] items-center left-[16px] pb-px pt-0 px-0 top-[24px] w-[47px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute h-[21.609px] left-[13.61px] top-[12px] w-[19.781px]" data-name="Icon">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-0 not-italic text-[#333333] text-[14.4px] text-nowrap top-[-1px] whitespace-pre">📊</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute left-[-16px] size-0 top-[-109px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-0 not-italic text-[#333333] text-[14.4px] top-[-3px] w-0">Reports</p>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[45.609px] relative rounded-[6px] shrink-0 w-[47px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[45.609px] relative w-[47px]">
        <Icon1 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-[-16px] not-italic text-[#333333] text-[14.4px] top-[-112px] w-0">&nbsp;</p>
        <Text />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute h-[21.609px] left-[13.61px] top-[12px] w-[19.781px]" data-name="Icon">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-0 not-italic text-[#111111] text-[14.4px] text-nowrap top-[-1px] whitespace-pre">🗃️</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute left-[-16px] size-0 top-[-158.61px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-0 not-italic text-[#111111] text-[14.4px] top-[-3px] w-0">Data sources</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#f0f0f0] h-[45.609px] relative rounded-[6px] shrink-0 w-[47px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[45.609px] relative w-[47px]">
        <Icon2 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-[-16px] not-italic text-[#111111] text-[14.4px] top-[-161.61px] w-0">&nbsp;</p>
        <Text1 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute h-[21.609px] left-[13.61px] top-[12px] w-[19.781px]" data-name="Icon">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-0 not-italic text-[#333333] text-[14.4px] text-nowrap top-[-1px] whitespace-pre">⏰</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute left-[-16px] size-0 top-[-208.22px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-0 not-italic text-[#333333] text-[14.4px] top-[-3px] w-0">Schedules</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[45.609px] relative rounded-[6px] shrink-0 w-[47px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[45.609px] relative w-[47px]">
        <Icon3 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-[-16px] not-italic text-[#333333] text-[14.4px] top-[-211.22px] w-0">&nbsp;</p>
        <Text2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[530.562px] items-start left-[16px] top-[109px] w-[47px]" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute h-[21.609px] left-[13.61px] top-[12px] w-[19.781px]" data-name="Icon">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-0 not-italic text-[#333333] text-[14.4px] text-nowrap top-[-1px] whitespace-pre">🔔</p>
    </div>
  );
}

function Text3() {
  return <div className="absolute left-[-16px] size-0 top-[-648.56px]" data-name="Text" />;
}

function Link3() {
  return (
    <div className="h-[45.609px] relative rounded-[6px] shrink-0 w-[47px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[45.609px] relative w-[47px]">
        <Icon4 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-[-16px] not-italic text-[#333333] text-[14.4px] top-[-651.56px] w-0">&nbsp;</p>
        <Text3 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute h-[21.609px] left-[13.61px] top-[12px] w-[19.781px]" data-name="Icon">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-0 not-italic text-[#333333] text-[14.4px] text-nowrap top-[-1px] whitespace-pre">❓</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute left-[-16px] size-0 top-[-698.17px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-0 not-italic text-[#333333] text-[14.4px] top-[-3px] w-0">Help</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[45.609px] relative rounded-[6px] shrink-0 w-[47px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[45.609px] relative w-[47px]">
        <Icon5 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-[-16px] not-italic text-[#333333] text-[14.4px] top-[-701.17px] w-0">&nbsp;</p>
        <Text4 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute h-[21.609px] left-[13.61px] top-[12px] w-[19.781px]" data-name="Icon">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-0 not-italic text-[#333333] text-[14.4px] text-nowrap top-[-1px] whitespace-pre">⚙️</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute left-[-16px] size-0 top-[-747.78px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-0 not-italic text-[#333333] text-[14.4px] top-[-3px] w-0">Settings</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[6px] shrink-0 w-[47px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[47px]">
        <Icon6 />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-[-16px] not-italic text-[#333333] text-[14.4px] top-[-750.78px] w-0">&nbsp;</p>
        <Text5 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] h-[161.828px] items-start left-[16px] pb-[8px] pt-[9px] px-0 top-[639.56px] w-[47px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#eeeeee] relative rounded-[16px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <p className="font-['Arial:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#aaaaaa] text-[16px] text-nowrap whitespace-pre">S</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute box-border content-stretch flex h-[73px] items-center left-[16px] pb-0 pt-px px-0 top-[801.39px] w-[47px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container3 />
    </div>
  );
}

function LogoutIcon() {
  return (
    <div className="h-[21.609px] relative shrink-0 w-[44.047px]" data-name="LogoutIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21.609px] relative w-[44.047px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-0 not-italic text-[14.4px] text-[red] text-nowrap top-[-1px] whitespace-pre">Logout</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute box-border content-stretch flex h-[45.609px] items-center left-[16px] pl-[20px] pr-0 py-0 rounded-[6px] top-[874.39px] w-[47px]" data-name="Link">
      <LogoutIcon />
    </div>
  );
}

function Navigation() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fbfbfb] relative shrink-0" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container />
      <Container1 />
      <Container2 />
      <Container4 />
      <Link6 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[42px] left-0 not-italic text-[#111111] text-[28px] text-nowrap top-0 whitespace-pre">Data Sources</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#666666] text-[16px] text-nowrap top-0 whitespace-pre">Connect your data simply and start creating reports</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[70px] items-start left-0 top-0 w-[362.844px]" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3px] w-[21.969px]" data-name="Icon">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-neutral-950">🔍</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center left-[21.97px] overflow-clip top-0 w-[195px]" data-name="Text Input">
      <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">Search...</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[24px] left-0 top-[94px] w-[216.969px]" data-name="Container">
      <Icon7 />
      <TextInput />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[118px] left-[40px] top-[32px] w-[1146px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[30px] left-[40px] top-[182px] w-[1146px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[30px] left-0 not-italic text-[#111111] text-[20px] text-nowrap top-0 whitespace-pre">Connect new font</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[515px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[515px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-0 whitespace-pre">📄</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[515px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[515px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#111111] text-[16px] text-nowrap top-0 whitespace-pre">File Uploads</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[515px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[515px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#666666] text-[14px] text-nowrap top-0 whitespace-pre">CSV, Microsoft Excel (.xlsx), JSON</p>
      </div>
    </div>
  );
}

function DataSourceCard() {
  return (
    <div className="[grid-area:1_/_1] bg-gray-50 relative rounded-[8px] shrink-0" data-name="DataSourceCard">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pl-[25px] pr-px py-[25px] relative size-full">
          <Icon8 />
          <Text6 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[515px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[515px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-0 whitespace-pre">📄</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[515px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[515px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#111111] text-[16px] text-nowrap top-0 whitespace-pre">File Uploads</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[21px] relative shrink-0 w-[515px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[515px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#666666] text-[14px] text-nowrap top-0 whitespace-pre">CSV, Microsoft Excel (.xlsx), JSON</p>
      </div>
    </div>
  );
}

function DataSourceCard1() {
  return (
    <div className="[grid-area:1_/_2] bg-gray-50 relative rounded-[8px] shrink-0" data-name="DataSourceCard">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pl-[25px] pr-px py-[25px] relative size-full">
          <Icon9 />
          <Text8 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[515px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[515px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-0 whitespace-pre">🤖</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[515px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[515px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#111111] text-[16px] text-nowrap top-0 whitespace-pre">{`Applications & SaaS`}</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[21px] relative shrink-0 w-[515px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[515px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#666666] text-[14px] text-nowrap top-0 whitespace-pre">Stripe, Salesforce, Zendesk, Google Analytics, Google Ads, Facebook Ads</p>
      </div>
    </div>
  );
}

function DataSourceCard2() {
  return (
    <div className="[grid-area:2_/_1] bg-gray-50 relative rounded-[8px] shrink-0" data-name="DataSourceCard">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pl-[25px] pr-px py-[25px] relative size-full">
          <Icon10 />
          <Text10 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[515px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[515px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-0 whitespace-pre">☁️</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[515px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[515px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#111111] text-[16px] text-nowrap top-0 whitespace-pre">Cloud Storage</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[21px] relative shrink-0 w-[515px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[515px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#666666] text-[14px] text-nowrap top-0 whitespace-pre">Google Drive, OneDrive, Dropbox, Google Cloud Storage, Amazon S3</p>
      </div>
    </div>
  );
}

function DataSourceCard3() {
  return (
    <div className="[grid-area:2_/_2] bg-gray-50 relative rounded-[8px] shrink-0" data-name="DataSourceCard">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pl-[25px] pr-px py-[25px] relative size-full">
          <Icon11 />
          <Text12 />
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[310px] left-[40px] top-[212px] w-[1146px]" data-name="Container">
      <DataSourceCard />
      <DataSourceCard1 />
      <DataSourceCard2 />
      <DataSourceCard3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[30px] relative shrink-0 w-[157.781px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[157.781px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[30px] left-0 not-italic text-[#111111] text-[20px] text-nowrap top-0 whitespace-pre">Connected fonts</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3px] w-[21.969px]" data-name="Icon">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-neutral-950">🔍</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center left-[21.97px] overflow-clip top-0 w-[195px]" data-name="Text Input">
      <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">Search...</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <Icon12 />
        <TextInput1 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[9.781px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[9.781px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 whitespace-pre">T</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[242.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[24px] items-center relative w-[242.75px]">
        <Container9 />
        <Icon13 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-between left-[40px] top-[554px] w-[1146px]" data-name="Container">
      <Heading3 />
      <Container10 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute h-[36px] left-[25px] top-[32px] w-[32.953px]" data-name="Icon">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-0 whitespace-pre">📄</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[515.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[515.516px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#111111] text-[16px] text-nowrap top-0 whitespace-pre">Vendas 2024</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[21px] relative shrink-0 w-[515.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[515.516px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#666666] text-[14px] text-nowrap top-0 whitespace-pre">CSV - 1.2k lines</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[45px] items-start left-[73.95px] top-[27.5px] w-[515.516px]" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-green-100 box-border content-stretch flex h-[22px] items-start left-[466.84px] px-[8px] py-[4px] rounded-[99px] top-[2px] w-[48.688px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-green-800 text-nowrap text-right whitespace-pre">Active</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[21px] left-0 top-[24px] w-[515.531px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[516.2px] not-italic text-[#333333] text-[14px] text-right top-0 translate-x-[-100%] w-[168px]">Proprietário: Jorge Ventura</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[21px] left-0 top-[45px] w-[515.531px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[515.88px] not-italic text-[#333333] text-[14px] text-right top-0 translate-x-[-100%] w-[219px]">Última sincronização: 2 horas atrás</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[66px] left-[605.47px] top-[17px] w-[515.531px]" data-name="Container">
      <Text16 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function ConnectedSourceCard() {
  return (
    <div className="bg-gray-50 h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="ConnectedSourceCard">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon14 />
      <Container12 />
      <Container15 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[216px] items-start left-[40px] top-[600px] w-[1146px]" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <ConnectedSourceCard key={i} />
      ))}
    </div>
  );
}

function MainContent() {
  return (
    <div className="[grid-area:1_/_2] overflow-clip relative shrink-0" data-name="Main Content">
      <Container7 />
      <Heading2 />
      <Container8 />
      <Container11 />
      <Container20 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[30px] left-0 not-italic text-[#111111] text-[20px] text-nowrap top-0 whitespace-pre">Começando</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#555555] text-[14px] top-0 w-[143px]">Passo 1 de 3 completo</p>
    </div>
  );
}

function Container21() {
  return <div className="bg-green-600 h-[8px] rounded-[99px] shrink-0 w-full" data-name="Container" />;
}

function Container22() {
  return (
    <div className="bg-[#eeeeee] h-[8px] relative rounded-[99px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[8px] items-start pl-0 pr-[180.672px] py-0 relative w-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[107px] relative shrink-0 w-[271px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[107px] items-start relative w-[271px]">
        <Heading4 />
        <Paragraph1 />
        <Container22 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[22px] relative shrink-0 w-[27.469px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[22px] items-start relative w-[27.469px]">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[30px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-center text-green-600">✅</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[21.609px] relative shrink-0 w-[131.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21.609px] relative w-[131.266px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] absolute decoration-solid font-['Arial:Regular',sans-serif] leading-[21.6px] left-0 line-through not-italic text-[#888888] text-[14.4px] text-nowrap top-[-1px] whitespace-pre">Bem-vindo(a), Sofia!</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[269px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12.531px] h-full items-center pl-[12px] pr-0 py-0 relative w-[269px]">
        <Icon16 />
        <Text20 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[56px] items-start left-0 p-px rounded-[8px] top-0 w-[271px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container24 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[22px] relative shrink-0 w-[12.094px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[22px] items-start relative w-[12.094px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-blue-600 text-center text-nowrap whitespace-pre">●</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[43.219px] relative shrink-0 w-[183.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.219px] relative w-[183.672px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[21.6px] left-0 not-italic text-[14.4px] text-blue-600 top-[-1px] w-[165px]">Explore os relatórios de amostra</p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[5.328px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[5.328px]">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-blue-600 text-nowrap top-0 whitespace-pre">›</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute box-border content-stretch flex gap-[21.953px] h-[67.219px] items-center left-px pl-[17.953px] pr-0 py-0 top-px w-[269px]" data-name="Container">
      <Icon17 />
      <Text21 />
      <Icon18 />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[39px] left-[53px] top-[89.22px] w-[199.016px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.2px] left-0 not-italic text-[#666666] text-[12.8px] top-[-2px] w-[200px]">Veja o poder do Yrden com nossos demos interativos</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-indigo-50 h-[145.219px] left-0 rounded-[8px] top-[60px] w-[271px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-indigo-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container26 />
      <Text22 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[22px] relative shrink-0 w-[12.094px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[22px] items-start relative w-[12.094px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#cccccc] text-[20px] text-center text-nowrap whitespace-pre">○</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[43.219px] relative shrink-0 w-[205px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.219px] relative w-[205px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-0 not-italic text-[#333333] text-[14.4px] top-[-1px] w-[193px]">Conecte sua primeira fonte de dados</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute box-border content-stretch flex gap-[21.953px] h-[67.219px] items-center left-px pl-[17.953px] pr-0 py-0 top-px w-[269px]" data-name="Container">
      <Icon19 />
      <Text23 />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute h-[39px] left-[53px] top-[89.22px] w-[182.875px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.2px] left-0 not-italic text-[#666666] text-[12.8px] top-[-2px] w-[183px]">Conecte seu Stripe, Zendesk ou Google Analytics</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[145.219px] left-0 rounded-[8px] top-[209.22px] w-[271px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container28 />
      <Text24 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-px left-0 top-[370.44px] w-[271px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[19.188px] relative shrink-0 w-[17.578px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.188px] relative w-[17.578px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.2px] left-0 not-italic text-[#666666] text-[12.8px] text-nowrap top-0 whitespace-pre">⏳</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[38.375px] relative shrink-0 w-[181.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38.375px] relative w-[181.422px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.2px] left-0 not-italic text-[#666666] text-[12.8px] top-0 w-[174px]">Sincronizando dados... (aprox. 60 min)</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[46.375px] items-center left-0 pl-[52px] pr-0 py-0 top-[387.44px] w-[271px]" data-name="Container">
      <Icon20 />
      <Text25 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[22px] relative shrink-0 w-[27.469px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[22px] items-start relative w-[27.469px]">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[30px] min-h-px min-w-px not-italic relative shrink-0 text-[#aaaaaa] text-[20px] text-center">🔒</p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[21.609px] relative shrink-0 w-[160.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21.609px] relative w-[160.094px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21.6px] left-0 not-italic text-[#aaaaaa] text-[14.4px] text-nowrap top-[-1px] whitespace-pre">Acesse seus dados reais</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[269px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12.531px] h-full items-center pl-[12px] pr-0 py-0 relative w-[269px]">
        <Icon21 />
        <Text26 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[56px] items-start left-0 p-px rounded-[8px] top-[437.81px] w-[271px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[271px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[271px]">
        <Container25 />
        <Container27 />
        <Container29 />
        <Container30 />
        <Container31 />
        <Container33 />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="[grid-area:1_/_3] bg-[#fbfbfb] relative shrink-0" data-name="Sidebar">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[25px] pr-0 py-[32px] relative size-full">
          <Container23 />
          <Container34 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eeeeee] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function OnboardingExperienceRedesign() {
  return (
    <div className="bg-white grid grid-cols-[80px_1226px_minmax(0px,_1fr)] grid-rows-[repeat(1,_minmax(0px,_1fr))] relative size-full" data-name="Onboarding Experience Redesign">
      <Navigation />
      <MainContent />
      <Sidebar />
    </div>
  );
}