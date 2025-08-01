const router = require('express').Router();
const { fetchRepoDetails, fetchReadme } = require('../api/githubApi');
const {
    fetchGitTree,
    fetchIssues,
    fetchRepoInsights,
    fetchPullRequests,
    fetchCodeHotspots,
    fetchIssueTimeline,
    fetchGoodFirstIssues,
    fetchContributors,
    fetchDeployments,
    fetchRepoFileContents,
    fetchFileCommits
} = require('../Controllers/GithubController');
const { fetchDependencyHealth } = require('../Controllers/InsightController');

router.get('/:username/:reponame/insights/dependencies', fetchDependencyHealth);
router.get('/:username/:reponame', fetchRepoDetails);
router.get('/:username/:reponame/readme', fetchReadme);
router.get('/:username/:reponame/commits', fetchFileCommits);
router.get('/:username/:reponame/deployments', fetchDeployments);
router.get('/:username/:reponame/git/trees/:branch', fetchGitTree);
router.get('/:username/:reponame/contributors', fetchContributors);
router.get('/:username/:reponame/issues', fetchIssues);
router.get('/:username/:reponame/pulls', fetchPullRequests);
router.get('/:username/:reponame/good-first-issues', fetchGoodFirstIssues);
router.get('/:username/:reponame/hotspots', fetchCodeHotspots);
router.get('/:username/:reponame/issues/:issue_number/timeline', fetchIssueTimeline);
router.get('/:username/:reponame/insights', fetchRepoInsights);

module.exports = router;
