# Settings workflow drill

Files are organized into two folders that represent the two branches used in the drill:

- `branch-round1/` — vague prompt implementation
- `branch-round2/` — precise prompt implementation with tests

To create real git branches and push them (run locally):

```bash
git init
git add .
git commit -m "scaffold: add round1 and round2 implementations"
git branch round1
git branch round2
git checkout round1
git add branch-round1
git commit -m "round1: vague settings form"
git checkout round2
git add branch-round2
git commit -m "round2: precise settings form + tests"
git remote add origin <your-remote-url>
git push origin round1
git push origin round2
```

Run tests (after `npm install`):

```bash
npm install
npm test
```
