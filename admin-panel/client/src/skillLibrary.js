// =====================================================
// SKILL LIBRARY — Pre-built catalog of technologies
// Easy to extend: just add entries to any category array
// Icons from: https://devicon.dev
// =====================================================

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const skillLibrary = [
  // ─── FRONTEND ──────────────────────────────────
  { name: 'HTML',            category: 'Frontend', icon: `${CDN}/html5/html5-original.svg` },
  { name: 'CSS',             category: 'Frontend', icon: `${CDN}/css3/css3-original.svg` },
  { name: 'JavaScript',      category: 'Frontend', icon: `${CDN}/javascript/javascript-original.svg` },
  { name: 'TypeScript',      category: 'Frontend', icon: `${CDN}/typescript/typescript-original.svg` },
  { name: 'React',           category: 'Frontend', icon: `${CDN}/react/react-original.svg` },
  { name: 'Vue.js',          category: 'Frontend', icon: `${CDN}/vuejs/vuejs-original.svg` },
  { name: 'Angular',         category: 'Frontend', icon: `${CDN}/angularjs/angularjs-original.svg` },
  { name: 'Svelte',          category: 'Frontend', icon: `${CDN}/svelte/svelte-original.svg` },
  { name: 'Next.js',         category: 'Frontend', icon: `${CDN}/nextjs/nextjs-original.svg` },
  { name: 'Nuxt.js',         category: 'Frontend', icon: `${CDN}/nuxtjs/nuxtjs-original.svg` },
  { name: 'Bootstrap',       category: 'Frontend', icon: `${CDN}/bootstrap/bootstrap-original.svg` },
  { name: 'Tailwind CSS',    category: 'Frontend', icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
  { name: 'Sass',            category: 'Frontend', icon: `${CDN}/sass/sass-original.svg` },
  { name: 'jQuery',          category: 'Frontend', icon: `${CDN}/jquery/jquery-original.svg` },
  { name: 'Redux',           category: 'Frontend', icon: `${CDN}/redux/redux-original.svg` },
  { name: 'Gatsby',          category: 'Frontend', icon: `${CDN}/gatsby/gatsby-original.svg` },
  { name: 'Ember.js',        category: 'Frontend', icon: `${CDN}/ember/ember-original-wordmark.svg` },
  { name: 'Vite',            category: 'Frontend', icon: `${CDN}/vitejs/vitejs-original.svg` },

  // ─── BACKEND ───────────────────────────────────
  { name: 'Node.js',         category: 'Backend',  icon: `${CDN}/nodejs/nodejs-original.svg` },
  { name: 'Express.js',      category: 'Backend',  icon: `${CDN}/express/express-original.svg` },
  { name: 'PHP',             category: 'Backend',  icon: `${CDN}/php/php-original.svg` },
  { name: 'Laravel',         category: 'Backend',  icon: `${CDN}/laravel/laravel-original.svg` },
  { name: 'Python',          category: 'Backend',  icon: `${CDN}/python/python-original.svg` },
  { name: 'Django',          category: 'Backend',  icon: `${CDN}/django/django-plain.svg` },
  { name: 'Flask',           category: 'Backend',  icon: `${CDN}/flask/flask-original.svg` },
  { name: 'FastAPI',         category: 'Backend',  icon: `${CDN}/fastapi/fastapi-original.svg` },
  { name: 'Ruby',            category: 'Backend',  icon: `${CDN}/ruby/ruby-original.svg` },
  { name: 'Rails',           category: 'Backend',  icon: `${CDN}/rails/rails-plain.svg` },
  { name: 'Java',            category: 'Backend',  icon: `${CDN}/java/java-original.svg` },
  { name: 'Spring',          category: 'Backend',  icon: `${CDN}/spring/spring-original.svg` },
  { name: 'C#',              category: 'Backend',  icon: `${CDN}/csharp/csharp-original.svg` },
  { name: '.NET',            category: 'Backend',  icon: `${CDN}/dotnetcore/dotnetcore-original.svg` },
  { name: 'Go',              category: 'Backend',  icon: `${CDN}/go/go-original.svg` },
  { name: 'Rust',            category: 'Backend',  icon: `${CDN}/rust/rust-original.svg` },
  { name: 'NestJS',          category: 'Backend',  icon: `${CDN}/nestjs/nestjs-original.svg` },
  { name: 'GraphQL',         category: 'Backend',  icon: `${CDN}/graphql/graphql-plain.svg` },

  // ─── DATABASE ──────────────────────────────────
  { name: 'MySQL',           category: 'Database', icon: `${CDN}/mysql/mysql-original.svg` },
  { name: 'PostgreSQL',      category: 'Database', icon: `${CDN}/postgresql/postgresql-original.svg` },
  { name: 'MongoDB',         category: 'Database', icon: `${CDN}/mongodb/mongodb-original.svg` },
  { name: 'Redis',           category: 'Database', icon: `${CDN}/redis/redis-original.svg` },
  { name: 'SQLite',          category: 'Database', icon: `${CDN}/sqlite/sqlite-original.svg` },
  { name: 'Firebase',        category: 'Database', icon: `${CDN}/firebase/firebase-original.svg` },
  { name: 'Supabase',        category: 'Database', icon: `${CDN}/supabase/supabase-original.svg` },
  { name: 'Oracle',          category: 'Database', icon: `${CDN}/oracle/oracle-original.svg` },
  { name: 'MariaDB',         category: 'Database', icon: `${CDN}/mariadb/mariadb-original.svg` },

  // ─── API & TOOLS ───────────────────────────────
  { name: 'REST APIs',       category: 'API',      icon: '' },
  { name: 'GraphQL',         category: 'API',      icon: `${CDN}/graphql/graphql-plain.svg` },
  { name: 'Git',             category: 'Tools',    icon: `${CDN}/git/git-original.svg`, role: 'Version Control' },
  { name: 'GitHub',          category: 'Tools',    icon: `${CDN}/github/github-original.svg`, role: 'Code Hosting' },
  { name: 'Docker',          category: 'Tools',    icon: `${CDN}/docker/docker-original.svg`, role: 'Containerization' },
  { name: 'Kubernetes',      category: 'Tools',    icon: `${CDN}/kubernetes/kubernetes-original.svg`, role: 'Orchestration' },
  { name: 'AWS',             category: 'Tools',    icon: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg`, role: 'Cloud Services' },
  { name: 'Linux',           category: 'Tools',    icon: `${CDN}/linux/linux-original.svg`, role: 'OS' },
  { name: 'Nginx',           category: 'Tools',    icon: `${CDN}/nginx/nginx-original.svg`, role: 'Web Server' },
  { name: 'Postman',         category: 'Tools',    icon: `${CDN}/postman/postman-original.svg`, role: 'API Testing' },
  { name: 'Figma',           category: 'Tools',    icon: `${CDN}/figma/figma-original.svg`, role: 'UI/UX Design' },
  { name: 'VS Code',         category: 'Tools',    icon: `${CDN}/vscode/vscode-original.svg`, role: 'Code Editor' },
  { name: 'Webpack',         category: 'Tools',    icon: `${CDN}/webpack/webpack-original.svg`, role: 'Module Bundler' },
  { name: 'Jest',            category: 'Tools',    icon: `${CDN}/jest/jest-plain.svg`, role: 'Testing' },
  { name: 'Vercel',          category: 'Tools',    icon: `${CDN}/vercel/vercel-original.svg`, role: 'Hosting' },
  { name: 'Heroku',          category: 'Tools',    icon: `${CDN}/heroku/heroku-original.svg`, role: 'Hosting' },
  { name: 'Jira',            category: 'Tools',    icon: `${CDN}/jira/jira-original.svg`, role: 'Project Management' },
  { name: 'npm',             category: 'Tools',    icon: `${CDN}/npm/npm-original-wordmark.svg`, role: 'Package Manager' },

  // ─── MOBILE ────────────────────────────────────
  { name: 'React Native',    category: 'Other',    icon: `${CDN}/react/react-original.svg` },
  { name: 'Flutter',         category: 'Other',    icon: `${CDN}/flutter/flutter-original.svg` },
  { name: 'Dart',            category: 'Other',    icon: `${CDN}/dart/dart-original.svg` },
  { name: 'Swift',           category: 'Other',    icon: `${CDN}/swift/swift-original.svg` },
  { name: 'Kotlin',          category: 'Other',    icon: `${CDN}/kotlin/kotlin-original.svg` },
  { name: 'Android',         category: 'Other',    icon: `${CDN}/android/android-original.svg` },
];

export default skillLibrary;
