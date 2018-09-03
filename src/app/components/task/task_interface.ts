/**
 * Single task interface
 */
export interface Task {
  /**
   * ID of a task
   */
  id: number
  /**
   * Text of a task
   */
  text: string
  /**
   * true if task complete
   */
  complete: boolean
}