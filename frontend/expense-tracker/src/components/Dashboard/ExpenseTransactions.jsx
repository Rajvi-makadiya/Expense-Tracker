import React from 'react';
import { LuArrowRight } from 'react-icons/lu';
import moment from 'moment';
import TransactionInfoCard from '../Cards/TransactionInfoCard';

const ExpenseTransactions = ({transactions, onSeeMore}) => {
  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Expense</h5>

            <button className='card-btn' onClick={onSeeMore}>
                See All <LuArrowRight className='text-base' />
            </button>
        </div>

        <div className='mt-6'>
            {transactions?.slice(0,5)?.map((expenses) => (
                <TransactionInfoCard 
                    key={expenses._id}
                    title={expenses.category}
                    icon={expenses.icon}
                    date={moment(expenses.date).format("Do MMM YYYY")}
                    amount={expenses.amount}
                    type="expense"
                    hideDeleteBtn
                />
            ))}
        </div>
    </div>
  );
};

export default ExpenseTransactions;
