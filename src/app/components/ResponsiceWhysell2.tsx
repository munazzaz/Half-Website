import React from 'react';

const Items = [
  { item1: "Bad Tenants" },
  { item1: "Divorce" },
  { item1: "Major Repairs" },
  { item1: "Judgements" },
  { item1: "Bad Neighbors" },
  { item1: "Delinquent Property Tax" },
  { item1: "Fire Damage" },
  { item1: "Relocation" },
  { item1: "Bankruptcy" },
  { item1: "Unfinished DYI Projects" },
  { item1: "Foreclosure" },
  { item1: "Co-Signer Issues" },
  { item1: "Behind on Payments" },
  { item1: "New Job or Transfer" },
  { item1: "Housing Code Violations" },
  { item1: "Outgrown Home" },
  { item1: "Death in the Family" },
  { item1: "Needing a Larger Space" },
  { item1: "Inherited House" },
  { item1: "Moving Closer to Family" },
  { item1: "Wanting Smaller Space" },
  { item1: "Liens" },
  { item1: "Medical Expenses" },
  { item1: "Probate" },
  { item1: "Retiring" },
  { item1: "Vacant Home" },
  { item1: "Tired Landlord" },
  { item1: "Tenant Problems" },
  { item1: "Negative Equity" },
  { item1: "Home Buyer Regret" },
  { item1: "Tired of Owning" },
  { item1: "Credit Card Debt" },
];

const groupItemsForGridCols1 = (items: any[], columns: number) => {
  let groupedItems: any[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, index) => {
    groupedItems[index % columns].push(item);
  });
  return groupedItems.flat();
};

const ResponsiveWhysell = () => {
  const itemsInOrder = groupItemsForGridCols1(Items, 4);

  return (
    <div className='roboto md:hidden block'>
      <h1 className='Whysell9:text-[42px] md:text-[38px] Whysell12:text-[32px] Whysell14:text-[28px] text-[25px] md:w-full Whysell11:w-[700px] Whysell12:w-[500px] Whysell13:w-[350px] Whysell14:w-[300px] w-[250px] font-semibold text-center mt-[82px]'>
        Why are you looking to sell your Property?
      </h1>
      <div className='text-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-12 Whysell11:mt-[80px] Whysell14:mt-[65px] mt-[45px]'>
        {itemsInOrder.map((item, key) => (
          <div key={key} className='flex items-center justify-start space-x-2 md:ml-0 Whysell11:ml-16 Whysell12:ml-12 Whysell13:ml-9 Whysell14:ml-7 ml-5'>
            <span className="text-[#45C22E] text-[22px]">✓</span>
            <h2 className='Whysell13:text-[22px] Whysell14:text-[19px] text-[17px] font-light'>{item.item1}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveWhysell;
