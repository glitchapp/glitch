// Packages
import * as webpack from 'webpack'

// Ours
import { merge, CompilerOptions } from './config'

const compiler = (options: CompilerOptions): webpack.Compiler => {
  return webpack(merge(options))
}

export default compiler
