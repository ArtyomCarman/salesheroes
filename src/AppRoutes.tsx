import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Navigate replace to='/about' />} />
                {/*<Route path="profile/:employeeNumber">*/}
                {/*    {result.getProfile && <Route index element={<ProfilePage />} />}*/}
                {/*    {result.getBadgeList && <Route path="awards" element={<ProfileAllAwardsPage />} />}*/}
                {/*</Route>*/}
                {/*<Route path="community" element={<CommunityPage />} />*/}
                {/*<Route path="community/:id" element={<CommunityIdPage />} />*/}
                {/*{result.getRatingList && <Route path="rating" element={<RatingListPage />} />}*/}
                {/*<Route path="tournaments">*/}
                {/*    {result.getTournamentList && <Route index element={<TournamentsPage />} />}*/}
                {/*    {result.getTournament && <Route path=":tournamentId" element={<TournamentsIdPage />} />}*/}
                {/*    {result.getTournamentRatingList && (*/}
                {/*        <Route path=":tournamentId/leaders" element={<TournamentsLeadersPage />} />*/}
                {/*    )}*/}
                {/*    {result.getTournamentList && (*/}
                {/*        <Route path="archive" element={<TournamentsArchivePage />} />*/}
                {/*    )}*/}
                {/*    {result.getTournament && (*/}
                {/*        <Route path="archive/:tournamentId" element={<TournamentIdArchivePage />} />*/}
                {/*    )}*/}
                {/*    {result.getTournamentList && (*/}
                {/*        <Route path="awards/:badgeId" element={<AwardTournamentsPage />} />*/}
                {/*    )}*/}
                {/*</Route>*/}
                {/*<Route path="awards">*/}
                {/*    {result.getBadgeList && <Route index element={<AwardsPage />} />}*/}
                {/*    {result.getBadge && <Route path=":badgeId" element={<AwardsIdPage />} />}*/}
                {/*    {result.getBadgeLeaders && <Route path=":badgeId/list" element={<AwardsListPage />} />}*/}
                {/*</Route>*/}
                {/*<Route path="about" element={<AboutPage />} />*/}
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
        </Routes>
    );
};
