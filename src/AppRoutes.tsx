import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  AboutPage,
  AwardsIdPage,
  AwardsListPage,
  AwardsPage,
  AwardTournamentsPage,
  CommunityIdPage,
  CommunityPage,
  ProfileAllAwardsPage,
  ProfilePage,
  RatingListPage,
  TournamentIdArchivePage,
  TournamentsArchivePage,
  TournamentsIdPage,
  TournamentsLeadersPage,
  TournamentsPage,
} from "./pages";
import { AppTemplate } from "./components/AppTemplate";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppTemplate />}>
        <Route index element={<Navigate replace to="awards" />} />
        <Route path="profile/:employeeNumber">
          <Route index element={<ProfilePage />} />
          <Route path="awards" element={<ProfileAllAwardsPage />} />
        </Route>
        <Route path="community" element={<CommunityPage />} />
        <Route path="community/:id" element={<CommunityIdPage />} />
        <Route path="rating" element={<RatingListPage />} />
        <Route path="tournaments">
          <Route index element={<TournamentsPage />} />
          <Route path=":tournamentId" element={<TournamentsIdPage />} />
          <Route
            path=":tournamentId/leaders"
            element={<TournamentsLeadersPage />}
          />

          <Route path="archive" element={<TournamentsArchivePage />} />
          <Route
            path="archive/:tournamentId"
            element={<TournamentIdArchivePage />}
          />
          <Route path="awards/:badgeId" element={<AwardTournamentsPage />} />
        </Route>
        <Route path="awards">
          <Route index element={<AwardsPage />} />
          <Route path=":badgeId" element={<AwardsIdPage />} />
          <Route path=":badgeId/list" element={<AwardsListPage />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};
