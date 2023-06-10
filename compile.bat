@echo off

set SOURCE_DIR=typescript
set OUTPUT_DIR=javascript

if not exist %OUTPUT_DIR% mkdir %OUTPUT_DIR%

for %%i in (%SOURCE_DIR%\*.ts) do (
  tsc %%i --outDir %OUTPUT_DIR% --target es6
)

echo TypeScript files compiled successfully.
