import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {

    const AllNews = useLoaderData();

    return (
        <div>
            <h4>This is home {AllNews.length}</h4>
            {
                AllNews.map(news => <NewsSummaryCard
                key={news._id}
                news={news}
                >
                </NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;