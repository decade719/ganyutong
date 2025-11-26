// 初始化打字机效果
(function () {
  const typingTexts = [
    '软件工程师',
    '机器学习爱好者',
    '全栈开发者',
    '科研探索者',
    '阿森纳铁杆球迷',
    '漫威电影爱好者',
    '技术创新追求者'
  ];
  const el = document.querySelector('.typing-text');
  if (!el) return;
  let textIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const text = typingTexts[textIdx];
    if (deleting) {
      charIdx--;
      el.textContent = text.substring(0, charIdx);
    } else {
      charIdx++;
      el.textContent = text.substring(0, charIdx);
    }

    let delay = deleting ? 50 : 100;

    if (!deleting && charIdx === text.length) {
      delay = 2000;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      textIdx = (textIdx + 1) % typingTexts.length;
      delay = 500;
    }
    setTimeout(tick, delay);
  }

  setTimeout(tick, 500);
})();

// 初始化粒子背景（增强版）
(function () {
  if (window.particlesJS) {
    window.particlesJS('particles-js', {
      particles: {
        number: { 
          value: 100, 
          density: { 
            enable: true, 
            value_area: 800 
          } 
        },
        color: { 
          value: ['#667eea', '#764ba2', '#f093fb', '#4ecdc4'] 
        },
        shape: { 
          type: ['circle', 'triangle'],
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: { 
          value: 0.6, 
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: { 
          value: 4, 
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.5,
            sync: false
          }
        },
        line_linked: { 
          enable: true, 
          distance: 150, 
          color: '#667eea', 
          opacity: 0.3, 
          width: 1.5 
        },
        move: { 
          enable: true, 
          speed: 2, 
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { 
          onhover: { 
            enable: true, 
            mode: ['grab', 'bubble'] 
          }, 
          onclick: { 
            enable: true, 
            mode: ['push', 'repulse'] 
          }, 
          resize: true 
        },
        modes: { 
          grab: {
            distance: 200,
            line_linked: {
              opacity: 0.5
            }
          },
          bubble: {
            distance: 200,
            size: 6,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          repulse: { 
            distance: 150, 
            duration: 0.4 
          }, 
          push: { 
            particles_nb: 6 
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
})();

// 平滑滚动
(function () {
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = 70;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
})();

// 滚动动画
(function () {
  const animatedElements = document.querySelectorAll('.section-title, .card');

  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });
})();

// 游戏系统
(function() {
  const gameModal = document.getElementById('game-modal');
  const gameContainer = document.getElementById('game-container');
  const gameCloseBtn = document.querySelector('.game-close-btn');
  const gameStartBtns = document.querySelectorAll('.game-start-btn');

  // 漫威角色猜谜游戏数据
  const marvelQuiz = [
    {
      hint: "我是托尼·斯塔克，拥有最先进的战甲，我说过'I am Iron Man'",
      answer: "钢铁侠",
      alternatives: ["钢铁侠", "美国队长", "雷神", "绿巨人"]
    },
    {
      hint: "我是史蒂夫·罗杰斯，手持振金盾牌，代表美国精神",
      answer: "美国队长",
      alternatives: ["美国队长", "钢铁侠", "黑寡妇", "鹰眼"]
    },
    {
      hint: "我是彼得·帕克，被放射性蜘蛛咬伤，能力越大责任越大",
      answer: "蜘蛛侠",
      alternatives: ["蜘蛛侠", "蚁人", "黑豹", "奇异博士"]
    },
    {
      hint: "我是索尔，来自阿斯加德，挥舞着雷神之锤",
      answer: "雷神",
      alternatives: ["雷神", "洛基", "海拉", "奥丁"]
    },
    {
      hint: "我是特查拉，瓦坎达的国王，拥有黑豹战衣",
      answer: "黑豹",
      alternatives: ["黑豹", "黑寡妇", "猎鹰", "战争机器"]
    },
    {
      hint: "我是史蒂芬·斯特兰奇，至尊法师，守护时间宝石",
      answer: "奇异博士",
      alternatives: ["奇异博士", "古一", "王", "莫度"]
    },
    {
      hint: "我是彼得·奎尔，银河护卫队的队长，喜欢听音乐",
      answer: "星爵",
      alternatives: ["星爵", "火箭", "格鲁特", "卡魔拉"]
    },
    {
      hint: "我是娜塔莎·罗曼诺夫，前神盾局特工，擅长格斗",
      answer: "黑寡妇",
      alternatives: ["黑寡妇", "红女巫", "惊奇队长", "女武神"]
    }
  ];

  // 打开游戏模态框
  function openGameModal(gameType) {
    gameModal.classList.add('active');
    gameContainer.innerHTML = '';

    if (gameType === 'marvel-quiz') {
      initMarvelQuiz();
    } else if (gameType === 'click-challenge') {
      initClickChallenge();
    }
  }

  // 关闭游戏模态框
  function closeGameModal() {
    gameModal.classList.remove('active');
  }

  // 初始化漫威猜谜游戏
  function initMarvelQuiz() {
    let currentQuestion = 0;
    let score = 0;
    let shuffledQuiz = [...marvelQuiz].sort(() => Math.random() - 0.5).slice(0, 5);

    function showQuestion() {
      if (currentQuestion >= shuffledQuiz.length) {
        showResult();
        return;
      }

      const question = shuffledQuiz[currentQuestion];
      gameContainer.innerHTML = `
        <div class="quiz-game">
          <h2 style="margin-bottom: 30px; font-size: 2em; background: linear-gradient(135deg, #667eea 0%, #f093fb 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            漫威角色猜谜
          </h2>
          <div class="quiz-question">第 ${currentQuestion + 1} / ${shuffledQuiz.length} 题</div>
          <div class="quiz-hint">${question.hint}</div>
          <input type="text" class="quiz-input" id="quiz-answer" placeholder="输入角色名称..." autocomplete="off">
          <div>
            <button class="quiz-submit" onclick="checkAnswer()">提交答案</button>
            <button class="quiz-submit" onclick="skipQuestion()" style="background: rgba(255,255,255,0.1);">跳过</button>
          </div>
          <div class="quiz-score">得分: ${score} / ${shuffledQuiz.length}</div>
        </div>
      `;

      const input = document.getElementById('quiz-answer');
      input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          checkAnswer();
        }
      });

      window.checkAnswer = function() {
        const userAnswer = document.getElementById('quiz-answer').value.trim();
        const resultDiv = document.createElement('div');
        resultDiv.className = 'quiz-result';

        if (userAnswer.toLowerCase() === question.answer.toLowerCase() || 
            question.answer.includes(userAnswer) || 
            userAnswer.includes(question.answer)) {
          score++;
          resultDiv.className += ' correct';
          resultDiv.textContent = '✓ 正确！答案是：' + question.answer;
        } else {
          resultDiv.className += ' wrong';
          resultDiv.textContent = '✗ 错误！正确答案是：' + question.answer;
        }

        gameContainer.querySelector('.quiz-game').appendChild(resultDiv);
        
        setTimeout(() => {
          currentQuestion++;
          showQuestion();
        }, 2000);
      };

      window.skipQuestion = function() {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'quiz-result wrong';
        resultDiv.textContent = '跳过！正确答案是：' + question.answer;
        gameContainer.querySelector('.quiz-game').appendChild(resultDiv);
        
        setTimeout(() => {
          currentQuestion++;
          showQuestion();
        }, 1500);
      };
    }

    function showResult() {
      const percentage = Math.round((score / shuffledQuiz.length) * 100);
      let message = '';
      if (percentage === 100) {
        message = '🎉 完美！你是真正的漫威粉丝！';
      } else if (percentage >= 80) {
        message = '🌟 太棒了！你对漫威很了解！';
      } else if (percentage >= 60) {
        message = '👍 不错！继续加油！';
      } else {
        message = '💪 还有进步空间，多看几部电影吧！';
      }

      gameContainer.innerHTML = `
        <div class="quiz-game">
          <h2 style="margin-bottom: 30px; font-size: 2em; background: linear-gradient(135deg, #667eea 0%, #f093fb 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            游戏结束
          </h2>
          <div class="quiz-score" style="font-size: 3em; margin: 30px 0;">
            ${score} / ${shuffledQuiz.length}
          </div>
          <div style="font-size: 1.5em; margin: 20px 0; color: #f093fb;">
            ${message}
          </div>
          <div style="font-size: 1.2em; color: rgba(255,255,255,0.7); margin: 20px 0;">
            正确率: ${percentage}%
          </div>
          <button class="quiz-submit" onclick="restartQuiz()" style="margin-top: 30px;">
            再玩一次
          </button>
        </div>
      `;

      window.restartQuiz = function() {
        currentQuestion = 0;
        score = 0;
        shuffledQuiz = [...marvelQuiz].sort(() => Math.random() - 0.5).slice(0, 5);
        showQuestion();
      };
    }

    showQuestion();
  }

  // 初始化点击挑战游戏
  function initClickChallenge() {
    let clicks = 0;
    let timeLeft = 30;
    let gameActive = true;
    let targetSize = 100;

    function updateGame() {
      if (!gameActive) return;

      gameContainer.innerHTML = `
        <div class="click-game">
          <h2 style="margin-bottom: 20px; font-size: 2em; background: linear-gradient(135deg, #667eea 0%, #f093fb 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            点击挑战
          </h2>
          <div class="click-stats">
            <div class="click-stat-item">
              <div class="click-stat-label">点击次数</div>
              <div class="click-stat-value" id="click-count">${clicks}</div>
            </div>
            <div class="click-stat-item">
              <div class="click-stat-label">剩余时间</div>
              <div class="click-stat-value" id="time-left">${timeLeft}s</div>
            </div>
            <div class="click-stat-item">
              <div class="click-stat-label">平均速度</div>
              <div class="click-stat-value" id="click-rate">${(clicks / (30 - timeLeft) || 0).toFixed(1)}/s</div>
            </div>
          </div>
          <div class="click-target" id="click-target" style="width: ${targetSize}px; height: ${targetSize}px;">
            <i class="fas fa-bullseye"></i>
          </div>
          <div style="margin-top: 20px; color: rgba(255,255,255,0.7);">
            尽可能快地点击目标！
          </div>
        </div>
      `;

      const target = document.getElementById('click-target');
      
      target.addEventListener('click', function() {
        if (!gameActive) return;
        clicks++;
        document.getElementById('click-count').textContent = clicks;
        const rate = clicks / (30 - timeLeft) || 0;
        document.getElementById('click-rate').textContent = rate.toFixed(1) + '/s';
        
        // 随机移动目标
        const maxX = window.innerWidth - targetSize - 40;
        const maxY = 400;
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY + 100;
        target.style.position = 'absolute';
        target.style.left = newX + 'px';
        target.style.top = newY + 'px';
        
        // 添加点击动画
        target.style.transform = 'scale(0.8)';
        setTimeout(() => {
          target.style.transform = 'scale(1)';
        }, 100);
      });

      // 计时器
      const timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time-left').textContent = timeLeft + 's';
        
        if (timeLeft <= 0) {
          clearInterval(timer);
          gameActive = false;
          showClickResult();
        }
      }, 1000);
    }

    function showClickResult() {
      const rate = (clicks / 30).toFixed(2);
      let message = '';
      if (clicks >= 100) {
        message = '🏆 神级手速！你是点击之王！';
      } else if (clicks >= 70) {
        message = '🌟 太厉害了！手速惊人！';
      } else if (clicks >= 50) {
        message = '👍 不错的表现！';
      } else {
        message = '💪 继续练习，提高手速！';
      }

      gameContainer.innerHTML = `
        <div class="click-game">
          <h2 style="margin-bottom: 30px; font-size: 2em; background: linear-gradient(135deg, #667eea 0%, #f093fb 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            游戏结束
          </h2>
          <div class="click-stats">
            <div class="click-stat-item">
              <div class="click-stat-label">总点击次数</div>
              <div class="click-stat-value" style="font-size: 2.5em;">${clicks}</div>
            </div>
            <div class="click-stat-item">
              <div class="click-stat-label">平均速度</div>
              <div class="click-stat-value" style="font-size: 2.5em;">${rate}/s</div>
            </div>
          </div>
          <div style="font-size: 1.5em; margin: 30px 0; color: #f093fb;">
            ${message}
          </div>
          <button class="quiz-submit" onclick="restartClickGame()" style="margin-top: 30px;">
            再玩一次
          </button>
        </div>
      `;

      window.restartClickGame = function() {
        clicks = 0;
        timeLeft = 30;
        gameActive = true;
        targetSize = 100;
        updateGame();
      };
    }

    updateGame();
  }

  // 绑定事件
  gameStartBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const gameType = this.getAttribute('data-game');
      openGameModal(gameType);
    });
  });

  gameCloseBtn.addEventListener('click', closeGameModal);
  gameModal.addEventListener('click', function(e) {
    if (e.target === gameModal) {
      closeGameModal();
    }
  });

  // ESC键关闭
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && gameModal.classList.contains('active')) {
      closeGameModal();
    }
  });
})();
