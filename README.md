#git branch -M main

#git push -u origin main

#Carrot Market Reloaded

#3 
#Tailwind CSS IntelliSense 다운로드

# npm i -D daisyui@latest 설치 (강의에서 안함)
# npm i @tailwindcss/forms

# 2024/07/26
- ============================================================ -
globals.css 내 

@layer base {
    a {
        @apply text-orange-500;
    }
}

default 인 거 같은 느낌 : a로 태그를 걸면 link와 자동 연결이 되어 <Link>로 되어있는 항목은 자동적으로 적용
<span> 이런거에는 적용이 안됨 단 span 내 classname에 ex) hover:underline-2 이런게 들어가 있으면 적용이 가능

- ============================================================ -

#4.1 npm install @heroicons/react 설치

- ============================================================ -

#6.0 Zod 라이브러리 사용 -> 유효성 검사!!
npm i zod